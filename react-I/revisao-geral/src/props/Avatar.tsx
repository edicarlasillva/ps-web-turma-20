import { ReactNode } from "react";

interface AvatarProps {
  size?: number;
  avatar: string;
  children?: ReactNode;
}

function Avatar({ size = 100, avatar, children }: AvatarProps) {
  return (
    <>
      <img
        style={{ borderRadius: "100%" }}
        className="avatar"
        src={avatar}
        width={size}
        height={size}
        alt=""
      />
      {children}
    </>
  );
}

export function Profile() {
  return (
    <div style={{ display: "inline-block", textAlign: "center" }}>
      <Avatar avatar="https://github.com/edicarlasillva.png">
        <p>Carla Silva</p>
      </Avatar>
      <Avatar size={50} avatar="https://github.com/felipefialho.png" />
      <Avatar size={30} avatar="https://github.com/diego3g.png" />
    </div>
  );
}
