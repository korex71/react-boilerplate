import React from "react";
import { Card } from "./styles";

export default function Item({ item }) {
  const id = item.id ? item.id : "";
  const title = item.title ? "Title: " + item.title : "";
  const thumbnail = item.thumbnail ? item.thumbnail : "";
  const uploader = item.uploader ? "Uploader: " + item.uploader : "";
  const extractor = item.extractor ? item.extractor : "";
  const listFormats = formats(item.formats);

  function formats(formats) {
    const parsed = formats.map((format) => {
      return {
        url: format.url ? format.url : null,
        format: format.format_note || format.format_id || format.format,
      };
    });
    return parsed;
  }

  return (
    <Card>
      <div className="info">
        <span className="from">{extractor}</span>
        <span className="id">ID: {id}</span>
        <span className="title">{title}</span>
        <span className="channel">{uploader}</span>
        <img src={thumbnail} alt="" />
      </div>
      <div className="links">
        {item.url && (
          <a
            href={item.url}
            target="_blank"
            rel="noreferrer"
            className="btn btn-primary rounded-0"
          >
            Download {item.format_id && item.format_id}
          </a>
        )}

        {listFormats &&
          listFormats.map((format, i) => {
            return (
              <a
                href={format.url}
                rel="noreferrer"
                target="_blank"
                className="btn btn-primary rounded-0"
              >
                {format.format}
              </a>
            );
          })}
      </div>
    </Card>
  );
}
