const { exec } = require('child_process');

// FFmpeg command to extract audio from video
const command = 'ffmpeg -i video6283024124499463702.mp4 -q:a 0 -map a output_audio3.mp3';

// Execute the command
exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error: ${error.message}`);
    return;
  }
  if (stderr) {
    console.error(`FFmpeg stderr: ${stderr}`);
    return;
  }
  console.log(`FFmpeg stdout: ${stdout}`);
});
