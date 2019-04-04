/**
 * @license
 * Copyright 2018 Google Inc. All Rights Reserved.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 * =============================================================================
 */
const os = require('os');
const path = require('path');

// Assume linux by default.
let libName = 'libtensorflow.so';
let frameworkLibName = 'libtensorflow_framework.so';
if (os.platform() === 'darwin') {
  libName = 'libtensorflow.dylib';
  frameworkLibName = '';
} else if (os.platform() === 'win32') {
  libName = 'tensorflow.dll';
  frameworkLibName = '';
}

const depsPath = path.join(__dirname, '..', 'deps');
const depsLibPath = path.join(depsPath, 'lib');
const depsLibTensorFlowPath = path.join(depsLibPath, libName);
const depsLibTensorFlowFrameworkPath = path.join(depsLibPath, frameworkLibName);

module.exports = {
  depsLibPath,
  depsLibTensorFlowFrameworkPath,
  depsLibTensorFlowPath,
  depsPath,
  frameworkLibName,
  libName
};
