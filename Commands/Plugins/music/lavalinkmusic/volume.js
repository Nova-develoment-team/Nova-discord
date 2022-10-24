module.exports = {
  name: "lavavolume",
  code: `
    $lavalinkExecute[volume;$Message[1]]
    Set the volume to $message[1]

    `,
};
