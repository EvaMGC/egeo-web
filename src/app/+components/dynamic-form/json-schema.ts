/*
 * Copyright (C) 2016 Stratio (http://stratio.com)
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *         http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export const jsonSchema: any = {
   '$schema': 'http://json-schema.org/schema#',
   'properties': {
      'requiredNumber': {
         'description': 'Required input description',
         'type': 'number',
         'default': 5
      },
      'minNumber': {
         'description': 'Min number input description',
         'type': 'number',
         'default': 28017,
         'minimum': 6
      },
      'maxNumber': {
         'description': 'Max number input description',
         'type': 'number',
         'default': 28017,
         'maximum': 5
      },
      'minAndMaxNumber': {
         'description': 'This number has to be between 7 and 19',
         'type': 'number',
         'default': 28017,
         'minimum': 6,
         'maximum': 20,
         'exclusiveMinimum': true,
         'exclusiveMaximum': true
      },
      'requiredText': {
         'description': 'This is a required text',
         'type': 'string',
         'default': 5
      },
      'minLengthText': {
         'description': 'You have to type a text with 10 characters at least',
         'type': 'string',
         'default': '',
         'minLength': 10
      },
      'maxLengthText': {
         'description': 'You have to type a text with less than 20 characters',
         'type': 'string',
         'default': '',
         'maxLength': 20
      },
      'minAndMaxLengthText': {
         'description': 'You have to type a text with less than 20 and 10 characters at least',
         'type': 'string',
         'default': '',
         'minLength': 10,
         'maxLength': 20
      },
      'url': {
         'description': 'You have to type a valid url',
         'type': 'string',
         'pattern': '(https?:\\/\\/(?:www\\.|(?!www))[^\\s\\.]+\\.[^\\s]{2,}|www\\.[^\\s]+\\.[^\\s]{2,})'
      }
   },
   'required': [
      'requiredNumber', 'requiredText'
   ]
};
