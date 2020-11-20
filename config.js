module.exports =  {
  "game": "arma3_x64", // The executable
  "path": "/home/steam/arma3", // Path to the ARMA install directory
  "port": 3000, // Port to accept connections on
  "host": "127.0.0.1", // IP to listen on
  "type": "linux", // Operating system type
  // Additional options that are appended to every server config file
  "additionalConfigurationOptions": "battleyeLicense=1;\nkickDuplicate=1;\nsteamProtocolMaxDataSize=1536;\nallowedVoteCmds[] = {};\nallowedLoadFileExtensions[]={\"b64\",\"sqf\",\"cpp\",\"hpp\"};\nallowedPreprocessFileExtensions[]={\"b64\",\"sqf\",\"cpp\",\"hpp\"};\ndoubleIdDetected=\"kick (_this select 0)\";\nonHackedData=\"kick (_this select 0)\";\nonDifferentData=\"kick (_this select 0)\";\nonUnsignedData=\"kick (_this select 0)\";",
  "parameters": [ // Additional command-line startup parameters
    "-noSound",
    "-world=empty",
    "-profiles=/home/steam/arma-profiles",
    "-loadMissionToMemory"
  ],
  "serverMods": [ // Server-side mods to use
    "mods_server"
  ],
  "admins": [ // Steam IDs of users who can login as admin without a password
  "76561198021054874", //Tirpitz
  "76561198012264515", //Exonic
  "76561197970612305", //Feral
  "76561198066555116" //Plum
  ],
  // These values are filled dynamically on the server with proper username/password
  "auth": { // If both username and password is set, HTTP Basic Auth will be used. You may use an array to specify more than one user.
    "username": "",
    "password": ""
  },
  "prefix": "${prefix}", // Prefix to add in front of every server name
  "suffix": "", // Suffix to add after every server name
  "logFormat": "dev"
}