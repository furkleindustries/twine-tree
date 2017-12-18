#! /usr/bin/env node
/* PEGjs's npm package is, confusingly and somewhat inexplicably, behind the *
 * same version on the git repository. The relevant effect here is that the  *
 * version on the repository allows the generation of ES modules, whereas    *
 * the npm package does not. The fix here is to delete the pegjs package,    *
 * clone the git repo, remove the .git folder, make the relevant pegjs/bin   *
 * files user-executable, and remake the symlink in node_modules/.bin. NOTE: *
 * this is only relevant for the 0.10.0 pegjs package, and should be         *
 * re-evaluated upon future updates.                                         */

const childProcess = require('child_process');
const path         = require('path');

const thisDir      = __dirname;
const nodeModDir   = path.join(thisDir, 'node_modules');
const pegjsDir     = path.join(nodeModDir, 'pegjs');
const gitSubdir    = path.join(pegjsDir, '.git');
const symlink      = path.join(nodeModDir, '.bin', 'pegjs');
const pegjsBinDir  = path.join(pegjsDir, 'bin');
const pegjsBinFile = path.join(pegjsBinDir, 'peg.js');
const pegjsOptFile = path.join(pegjsBinDir, 'options.js');
const repoAddr     = 'https://github.com/pegjs/pegjs';

const cmd =
  `rm -rf ${pegjsDir} && ` +
  `git clone ${repoAddr} ${pegjsDir} && ` +
  `rm -rf ${gitSubdir} && ` +
  `chmod 744 ${pegjsBinFile} ${pegjsOptFile} && ` +
  `rm -f ${symlink} && ` +
  `ln -s ${pegjsBinFile} ${symlink}`;

childProcess.exec(cmd, (e) => {
  if (e) {
    throw e;
  }
});