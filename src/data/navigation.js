import {
  faAddressBook,
  faAddressCard,
  faHouse,
  // faFileLines,
  faBlog,
} from "@fortawesome/free-solid-svg-icons";

export const navigation = [
  // sections on home
  { id: 1, name: "Home", path: "", icon: faHouse },
  { id: 2, name: "About", path: "about", icon: faAddressCard },
  { id: 3, name: "Blog", path: "blog", icon: faBlog },
  { id: 4, name: "Contact", path: "contact", icon: faAddressBook },
  // { id: 5, name: "Resume", path: "#resume", icon: faFileLines },
];
