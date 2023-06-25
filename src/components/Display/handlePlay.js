export default function handlePlay(audioFiles) {
  let audio1 = audioFiles[0].audio;

  if (audio1) {
    let audio = new Audio(audio1);
    audio.play();
    return;
  } else {
    let audio2 = audioFiles[1].audio;
    if (audio2) {
      let audio = new Audio(audio2);
      audio.play();
      return;
    } else {
      let audio3 = audioFiles[2].audio;
      if (audio3) {
        let audio = new Audio(audio3);
        audio.play();
        return;
      }
    }
  }
}
