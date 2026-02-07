import {
  faAddressBook,
  faAddressCard,
  faHouse,
  // faFileLines,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

export const navigation = [
  // sections on home
  { id: 1, name: "Home", section: "#hero", icon: faHouse },
  { id: 2, name: "About", section: "#about", icon: faAddressCard },
  { id: 3, name: "Blog", section: "#blog", icon: faBlog },
  { id: 4, name: "Contact", section: "#contact", icon: faAddressBook },
  // { id: 5, name: "Resume", section: "#resume", icon: faFileLines },
];
