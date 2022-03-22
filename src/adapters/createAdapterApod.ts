import { EndpointApod, Apod } from '@models/Apod';

export const createAdapterApod = (apod: EndpointApod): Apod => { 
  const formattedApod: Apod = {
    title: apod.title,
    date: apod.date,
    explanation: apod.explanation,
    hdurl: apod.hdurl,
    url: apod.url,
    mediaType: apod.media_type,
    serviceVersion: apod.service_version
  }
  return formattedApod;
}