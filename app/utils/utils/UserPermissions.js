class UserPermissions {
  getCameraPermissions = async () => {
    const {status} = await Permissions.askAsync(Permissions.CAMERA_ROLL);

    if (status != 'granted') {
      alert('We need permission to use your camera roll');
    }
  };
}

export default new UserPermissions();
