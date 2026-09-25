- name: Build
  working-directory: client
  run: npm run build

- name: Upload Pages artifact
  uses: actions/upload-pages-artifact@v3
  with:
    path: client/dist
