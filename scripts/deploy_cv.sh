#!/usr/bin/env bash
set -euo pipefail

# SORGENTE (OneDrive) — usa esattamente questo nome file
CV_SRC="/Users/pietrovisaggio/Library/CloudStorage/OneDrive-bc.edu/2. Job Market/0. CV_Updated/PietroVisaggio-CV.pdf"

# REPO del sito
SITE_REPO="/Users/pietrovisaggio/pietrovisaggio.github.io"

# DESTINAZIONE nel sito (stesso nome, senza trattini)
DEST="$SITE_REPO/assets/PietroVisaggio-CV.pdf"

# 1) allineati al remoto (evita non-fast-forward)
cd "$SITE_REPO"
git pull --rebase --autostash origin main

# 2) assicurati che la cartella esista
mkdir -p "$SITE_REPO/assets"

# 3) copia e committa solo se cambia
cp -f "$CV_SRC" "$DEST"
git add "$DEST"
if ! git diff --cached --quiet; then
  git commit -m "Update CV: $(date -u +'%Y-%m-%d %H:%M:%S UTC')"
  git push
else
  echo "No changes in CV; nothing to commit."
fi
