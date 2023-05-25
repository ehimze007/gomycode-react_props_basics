import ProfilePhoto from "./ProfilePhoto";
import Fullname from "./Fullname";
import Address from "./Address";

export default function Profile(props) {
  return (
    <>
      <ProfilePhoto image={props.children} />
      <Fullname fullName={props.fullName} />
      <p>{props.profession}</p>
      <p>{props.bio}</p>
      <Address address={props.address} />
    </>
  );
}
