/**
 * Copyright 2013 Facebook, Inc.
 *
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
 *
 * @jsx React.DOM
 * @emails react-core
 */

"use strict";

var mocks = require("../../mocks");

var React;
var ReactTestUtils;
var reactComponentExpect;

describe('ReactCompositeComponent-spec', function() {

  beforeEach(function() {
    React = require("../../React");
    ReactTestUtils = require("../../ReactTestUtils");
    reactComponentExpect = require("../../reactComponentExpect");
  });

  it('should throw when `render` is not specified', function() {
    expect(function() {
      React.createClass({});
    }).toThrow(
      'Invariant Violation: createClass(...): Class specification must ' +
      'implement a `render` method.'
    );
  });

  it('should copy `displayName` onto the Constructor', function() {
    var TestComponent = React.createClass({displayName: 'TestComponent',
      render: function() {
        return React.DOM.div(null );
      }
    });

    expect(TestComponent.componentConstructor.displayName)
      .toBe('TestComponent');
  });

  it('should copy prop declarations onto the Constructor', function() {
    var propValidator = mocks.getMockFunction();
    var TestComponent = React.createClass({displayName: 'TestComponent',
      props: {
        value: propValidator
      },
      render: function() {
        return React.DOM.div(null );
      }
    });

    expect(TestComponent.componentConstructor.propDeclarations).toBeDefined();
    expect(TestComponent.componentConstructor.propDeclarations.value)
      .toBe(propValidator);
  });
});
