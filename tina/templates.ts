import type { TinaField } from "tinacms";
export function directorsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Name",
      required: true,
    },
    {
      type: "string",
      name: "position",
      label: "Position",
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
    },
    {
      type: "image",
      name: "photo",
      label: "Photo",
    },
    {
      type: "string",
      name: "weight",
      label: "Sort Order",
    },
  ] as TinaField[];
}
export function eventsFields() {
  return [
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "string",
      name: "title",
      label: "Title",
      required: true,
    },
    {
      type: "string",
      name: "location",
      label: "Location",
      required: true,
    },
    {
      type: "string",
      name: "time",
      label: "Time",
      required: true,
    },
  ] as TinaField[];
}
export function pageFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Page Title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
  ] as TinaField[];
}
export function postFields() {
  return [
    {
      type: "string",
      name: "itle",
      label: "Post Title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Date",
      required: true,
    },
    {
      type: "image",
      name: "post_image",
      label: "Post Image",
    },
  ] as TinaField[];
}
export function projectsFields() {
  return [
    {
      type: "string",
      name: "title",
      label: "Project Title",
      required: true,
    },
    {
      type: "datetime",
      name: "date",
      label: "Upload Date",
      required: true,
    },
    {
      type: "string",
      name: "summary",
      label: "Project Summary",
      required: true,
    },
    {
      type: "string",
      name: "download",
      label: "Download Path",
    },
    {
      type: "string",
      name: "categories",
      label: "Categories",
      list: true,
      ui: {
        component: "tags",
      },
    },
    {
      type: "number",
      name: "weight",
      label: "Position Number",
    },
    {
      type: "image",
      name: "project_image",
      label: "Project Image",
    },
  ] as TinaField[];
}
