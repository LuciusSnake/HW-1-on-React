export const SORT_SELECT_TYPES = {
  EMPTY: "",
  NAME: "name",
  USERNAME: "username",
  EMAIL: "email",
  CITY: "city",
};

export const SORT_SELECT_OPTIONS = [
  { value: SORT_SELECT_TYPES.EMPTY, label: "Select By...", disabled: true },
  { value: SORT_SELECT_TYPES.NAME, label: "By name" },
  { value: SORT_SELECT_TYPES.USERNAME, label: "By nickname" },
  { value: SORT_SELECT_TYPES.EMAIL, label: "By E-mail" },
  { value: SORT_SELECT_TYPES.CITY, label: "By address" },
];
