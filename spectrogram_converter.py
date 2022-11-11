import os
import matplotlib.pyplot as plt

#for loading and visualizing audio files
import librosa
import librosa.display

#to play audio
import IPython.display as ipd

audio_fpath = "C:/Users/user/PycharmProjects/hackaleague/audio_out"
audio_clips = os.listdir(audio_fpath)
print("No. of .wav files in audio folder = ",len(audio_clips))
os.chdir('C:/Users/user/PycharmProjects/hackaleague/animals_img')
for i in range(len(audio_clips)):
    x, sr = librosa.load(f'C:/Users/user/PycharmProjects/hackaleague/audio_out/animals{i}.wav', sr=44100)

    print(type(x), type(sr))
    print(x.shape, sr)

# x, sr = librosa.load(f'C:/Users/user/PycharmProjects/hackaleague/audio_out/animals0.wav', sr=44100)
#
# print(type(x), type(sr))
# print(x.shape, sr)


    X = librosa.stft(x)
    Xdb = librosa.amplitude_to_db(abs(X))
    plt.figure(figsize=(14, 5))
    librosa.display.specshow(Xdb, sr=sr, x_axis='time', y_axis='hz')
    plt.colorbar()
    # plt.show()python
    plt.savefig(f'out{i}.png')

matplotlib.use('agg')