var cloneDeep = require('lodash/cloneDeep');

var config = {
  experiments: [
    {
      status: "Running",
      key: "testExperiment12",
      trafficAllocation: [
        {
          entityId: "6387320950",
          endOfRange: 5000
        },
        {
          entityId: "6387320951",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6387320950",
          key: "control"
        },
        {
          id: "6387320951",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6344617435"
    },
    {
      status: "Running",
      key: "testExperiment19",
      trafficAllocation: [
        {
          entityId: "6380932289",
          endOfRange: 5000
        },
        {
          entityId: "6380932290",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6380932289",
          key: "control"
        },
        {
          id: "6380932290",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6349682899"
    },
    {
      status: "Running",
      key: "testExperiment21",
      trafficAllocation: [
        {
          entityId: "6356833706",
          endOfRange: 5000
        },
        {
          entityId: "6356833707",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6356833706",
          key: "control"
        },
        {
          id: "6356833707",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6350472041"
    },
    {
      status: "Running",
      key: "testExperiment7",
      trafficAllocation: [
        {
          entityId: "6367863508",
          endOfRange: 5000
        },
        {
          entityId: "6367863509",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6367863508",
          key: "control"
        },
        {
          id: "6367863509",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6352512126"
    },
    {
      status: "Running",
      key: "testExperiment15",
      trafficAllocation: [
        {
          entityId: "6379652128",
          endOfRange: 5000
        },
        {
          entityId: "6379652129",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6379652128",
          key: "control"
        },
        {
          id: "6379652129",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6357622647"
    },
    {
      status: "Running",
      key: "testExperiment16",
      trafficAllocation: [
        {
          entityId: "6359551503",
          endOfRange: 5000
        },
        {
          entityId: "6359551504",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6359551503",
          key: "control"
        },
        {
          id: "6359551504",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6361100609"
    },
    {
      status: "Running",
      key: "testExperiment8",
      trafficAllocation: [
        {
          entityId: "6378191496",
          endOfRange: 5000
        },
        {
          entityId: "6378191497",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6378191496",
          key: "control"
        },
        {
          id: "6378191497",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6361743021"
    },
    {
      status: "Running",
      key: "testExperimentWithFirefoxAudience",
      trafficAllocation: [
        {
          entityId: "6380932291",
          endOfRange: 5000
        },
        {
          entityId: "6380932292",
          endOfRange: 10000
        }
      ],
      audienceIds: [
        "6317864099"
      ],
      variations: [
        {
          id: "6380932291",
          key: "control"
        },
        {
          id: "6380932292",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6361931183"
    },
    {
      status: "Not started",
      key: "testExperimentNotRunning",
      trafficAllocation: [
        {
          entityId: "6377723538",
          endOfRange: 5000
        },
        {
          entityId: "6377723539",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6377723538",
          key: "control"
        },
        {
          id: "6377723539",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6362042330"
    },
    {
      status: "Running",
      key: "testExperiment5",
      trafficAllocation: [
        {
          entityId: "6361100607",
          endOfRange: 5000
        },
        {
          entityId: "6361100608",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6361100607",
          key: "control"
        },
        {
          id: "6361100608",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6365780767"
    },
    {
      status: "Running",
      key: "testExperiment0",
      trafficAllocation: [
        {
          entityId: "6379122883",
          endOfRange: 5000
        },
        {
          entityId: "6379122884",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6379122883",
          key: "control"
        },
        {
          id: "6379122884",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6366023085"
    },
    {
      status: "Running",
      key: "testExperiment2",
      trafficAllocation: [
        {
          entityId: "6373980983",
          endOfRange: 5000
        },
        {
          entityId: "6373980984",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6373980983",
          key: "control"
        },
        {
          id: "6373980984",
          key: "variation"
        }
      ],
      forcedVariations: {
        variation_user: "variation",
        control_user: "control"
      },
      id: "6367473060"
    },
    {
      status: "Running",
      key: "testExperiment13",
      trafficAllocation: [
        {
          entityId: "6361931181",
          endOfRange: 5000
        },
        {
          entityId: "6361931182",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6361931181",
          key: "control"
        },
        {
          id: "6361931182",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6367842673"
    },
    {
      status: "Running",
      key: "testExperiment18",
      trafficAllocation: [
        {
          entityId: "6375121958",
          endOfRange: 5000
        },
        {
          entityId: "6375121959",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6375121958",
          key: "control"
        },
        {
          id: "6375121959",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6367902537"
    },
    {
      status: "Running",
      key: "testExperiment17",
      trafficAllocation: [
        {
          entityId: "6353582033",
          endOfRange: 5000
        },
        {
          entityId: "6353582034",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6353582033",
          key: "control"
        },
        {
          id: "6353582034",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6368671885"
    },
    {
      status: "Running",
      key: "testExperiment11",
      trafficAllocation: [
        {
          entityId: "6355235088",
          endOfRange: 5000
        },
        {
          entityId: "6355235089",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6355235088",
          key: "control"
        },
        {
          id: "6355235089",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6369512098"
    },
    {
      status: "Running",
      key: "testExperiment3",
      trafficAllocation: [
        {
          entityId: "6355235086",
          endOfRange: 5000
        },
        {
          entityId: "6355235087",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6355235086",
          key: "control"
        },
        {
          id: "6355235087",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6371041921"
    },
    {
      status: "Running",
      key: "testExperiment10",
      trafficAllocation: [
        {
          entityId: "6382231014",
          endOfRange: 5000
        },
        {
          entityId: "6382231015",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6382231014",
          key: "control"
        },
        {
          id: "6382231015",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6375231186"
    },
    {
      status: "Running",
      key: "testExperiment20",
      trafficAllocation: [
        {
          entityId: "6362951972",
          endOfRange: 5000
        },
        {
          entityId: "6362951973",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6362951972",
          key: "control"
        },
        {
          id: "6362951973",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6377131549"
    },
    {
      status: "Running",
      key: "testExperiment9",
      trafficAllocation: [
        {
          entityId: "6369462637",
          endOfRange: 5000
        },
        {
          entityId: "6369462638",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6369462637",
          key: "control"
        },
        {
          id: "6369462638",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6382251626"
    },
    {
      status: "Running",
      key: "testExperiment14",
      trafficAllocation: [
        {
          entityId: "6388520034",
          endOfRange: 5000
        },
        {
          entityId: "6388520035",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6388520034",
          key: "control"
        },
        {
          id: "6388520035",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6383770101"
    },
    {
      status: "Running",
      key: "testExperiment6",
      trafficAllocation: [
        {
          entityId: "6378802069",
          endOfRange: 5000
        },
        {
          entityId: "6378802070",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6378802069",
          key: "control"
        },
        {
          id: "6378802070",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6386411740"
    },
    {
      status: "Running",
      key: "testExperiment4",
      trafficAllocation: [
        {
          entityId: "6350263010",
          endOfRange: 5000
        },
        {
          entityId: "6350263011",
          endOfRange: 10000
        }
      ],
      audienceIds: [ ],
      variations: [
        {
          id: "6350263010",
          key: "control"
        },
        {
          id: "6350263011",
          key: "variation"
        }
      ],
      forcedVariations: { },
      id: "6386460951"
    }
  ],
  version: "1",
  audiences: [
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "firefox"}]]]',
      id: "6317864099",
      name: "Firefox users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "safari"}]]]',
      id: "6360592016",
      name: "Safari users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "chrome"}]]]',
      id: "6361743063",
      name: "Chrome users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "desktop"}]]]',
      id: "6372190788",
      name: "Desktop users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "android"}]]]',
      id: "6376141951",
      name: "Android users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "ie"}]]]',
      id: "6377605300",
      name: "IE users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "tablet"}]]]',
      id: "6378191534",
      name: "Tablet users"
    },
    {
      conditions: '["and", ["or", ["or", {"name": "browser_type", "type": "custom_dimension", "value": "opera"}]]]',
      id: "6386521201",
      name: "Opera users"
    }
  ],
  dimensions: [
    {
      id: "6381732124",
      key: "browser_type",
      segmentId: "6388221232"
    }
  ],
  groups: [
    {
      policy: "random",
      trafficAllocation: [
        {
          entityId: "6416416234",
          endOfRange: 5000
        },
        {
          entityId: "6451651052",
          endOfRange: 10000
        }
      ],
      experiments: [
        {
          status: "Running",
          percentageIncluded: 5000,
          key: "mutex_exp1",
          trafficAllocation: [
            {
              entityId: "6448110056",
              endOfRange: 5000
            },
            {
              entityId: "6448110057",
              endOfRange: 10000
            }
          ],
          audienceIds: [
            "6361743063"
          ],
          variations: [
            {
              id: "6448110056",
              key: "a"
            },
            {
              id: "6448110057",
              key: "b"
            }
          ],
          forcedVariations: { },
          id: "6416416234"
        },
        {
          status: "Running",
          percentageIncluded: 5000,
          key: "mutex_exp2",
          trafficAllocation: [
            {
              entityId: "6437485007",
              endOfRange: 5000
            },
            {
              entityId: "6437485008",
              endOfRange: 10000
            }
          ],
          audienceIds: [ ],
          variations: [
            {
              id: "6437485007",
              key: "a"
            },
            {
              id: "6437485008",
              key: "b"
            }
          ],
          forcedVariations: {
            user_b: "b",
            user_a: "a"
          },
          id: "6451651052"
        }
      ],
      id: "6441101079"
    }
  ],
  projectId: "6379191198",
  accountId: "6365361536",
  events: [
    {
      experimentIds: [ ],
      id: "6360377431",
      key: "testEventWithoutExperiments"
    },
    {
      experimentIds: [
        "6366023085"
      ],
      id: "6373184839",
      key: "testEvent"
    },
    {
      experimentIds: [
        "6451651052"
      ],
      id: "6379061102",
      key: "testEventWithMultipleGroupedExperiments"
    },
    {
      experimentIds: [
        "6362042330"
      ],
      id: "6385201698",
      key: "testEventWithExperimentNotRunning"
    },
    {
      experimentIds: [
        "6361931183"
      ],
      id: "6385551103",
      key: "testEventWithAudiences"
    },
    {
      experimentIds: [
        "6371041921",
        "6382251626",
        "6368671885",
        "6361743021",
        "6386460951",
        "6377131549",
        "6365780767",
        "6369512098",
        "6367473060",
        "6366023085",
        "6361931183",
        "6361100609",
        "6367902537",
        "6375231186",
        "6349682899",
        "6362042330",
        "6344617435",
        "6386411740",
        "6350472041",
        "6416416234",
        "6451651052",
        "6367842673",
        "6383770101",
        "6357622647",
        "6352512126"
      ],
      id: "6386470923",
      key: "testEventWithMultipleExperiments"
    },
    {
      experimentIds: [
        "6361931183",
        "6416416234",
        "6367473060"
      ],
      id: "6386460946",
      key: "Total Revenue"
    }
  ],
  revision: "92"
};

function getTestProjectConfig() {
  return cloneDeep(config);
}

module.exports = {
  getTestProjectConfig: getTestProjectConfig,
};
