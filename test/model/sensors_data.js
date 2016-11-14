export  const  data = [
  {
    "id": 1234,
    "name": "Température Bureau",
    "type": "TEMPERATURE",
    "data": {
      "values": [23,23,22,21,23,23,23,25,25],
      "labels": ["2016-10-19T08:00:00.000Z", "2016-10-19T09:00:00.000Z", "2016-10-19T10:00:00.000Z", "2016-10-19T11:00:00.000Z", "2016-10-19T12:00:00.000Z","2016-10-19T13:00:00.000Z","2016-10-19T14:00:00.000Z","2016-10-19T15:00:00.000Z","2016-10-19T16:00:00.000Z"]
    }
  },
  {
    "id": 10245,
    "name": "Porte du Garage",
    "type": "DOOR",
    "data": {
      "value": 0
    }
  },
  {
    "id": 2222,
    "name": "Ventilateur Ordinateur Bureau",
    "type": "FAN_SPEED",
    "data": {
      "values": [1073,1800,2299,2176,1899,1400],
      "labels": ["2016-10-19T10:00:00.000Z", "2016-10-19T10:05:00.000Z", "2016-10-19T10:10:00.000Z", "2016-10-19T10:15:00.000Z", "2016-10-19T10:20:00.000Z","2016-10-19T10:25:00.000Z"]
    }
  },
  {
    "id": 666,
    "name": "Incorrect type",
    "type": "ERROR",
    "data": {}
  },
  {
    "id": 5624,
    "name": "Error in values and labels",
    "type": "TEMPERATURE",
    "data": {
      "values": [],
      "labels": []
    }
  },
  {
    "id": 9999,
    "name": "Error in labels",
    "type": "TEMPERATURE",
    "data": {
      "values": [1073,1800,2299,2176,1899,1400],
      "labels": ["2016-10-19T10:25:00.000Z", "2016-10-19T10:20:00.000Z", "2016-10-19T10:15:00.000Z", "2016-10-19T10:10:00.000Z", "2016-10-19T10:05:00.000Z", "2016-10-19T10:00:00.000Z"]
    }
  },
  {
    "id": 5,
    "name": "Error in value",
    "type": "SWITCH",
    "data": {}
  },
]