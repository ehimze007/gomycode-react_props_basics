import "./App.css";
import Profile from "./Component/Profile/Profile";
import profilePhoto from "./profile-photo.png";

function App() {
  return (
    <main>
      <Profile
        fullName="Nathanael Ehimze"
        address="Lagos, Nigeria"
        profession="Software Engineer"
        bio="programmer | baller"
      >
        {profilePhoto}
      </Profile>
    </main>
  );
}

export default App;
