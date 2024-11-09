import i18n from "i18next";
import * as locales from "date-fns/locale";

export { locales };

export type LocaleKey = keyof typeof locales;

export type Resources = Partial<
  Record<LocaleKey, { translation: Record<string, string> }>
>;

/**
 * TODO: Ideally load from json files.
 */
const resources: Resources = {
  enGB: {
    translation: {
      "reactions.reply": "Reply",
      "reactions.read": "Read replies on Bluesky",
      "reactions.read_zero": "Read replies on Bluesky",
      "reactions.read_other": "Read {{count}} replies on Bluesky",
      "footer.view-on-bluesky-450": "View on Bluesky",
      "footer.view-on-bluesky-400": "Bluesky",
      "errors.not-available": "This post is not available",
      "errors.invalid-url": "Invalid URL.",
      "errors.failed-to-fetch":
        "Ooops, something went wrong fetching the post details.",
    },
  },
  ptBR: {
    translation: {
      "reactions.reply": "Responder",
      "reactions.read": "Leia mais no Bluesky",
      "reactions.read_zero": "Leia mais no Bluesky",
      "reactions.read_one": "Leia 1 comentário no Bluesky",
      "reactions.read_other": "Leia {{count}} comentários no Bluesky",
      "footer.view-on-bluesky-450": "Veja no Bluesky",
      "footer.view-on-bluesky-400": "Bluesky",
      "errors.not-available": "Post não dispoível",
      "errors.invalid-url": "A url informada não é válida.",
      "errors.failed-to-fetch":
        "Ooops, ocorreu ao buscar os detalhes desse post.",
    },
  },
  it: {
    translation: {
      "reactions.reply": "Rispondi",
      "reactions.read": "Leggi di più su Bluesky",
      "reactions.read_zero": "Leggi di più su Bluesky",
      "reactions.read_one": "Leggi {{count}} risposte su Bluesky",
      "reactions.read_other": "Leggi {{count}} risposte su Bluesky",
      "footer.view-on-bluesky-450": "Vedi su Bluesky",
      "footer.view-on-bluesky-400": "Bluesky",
      "errors.not-available": "Questo post non è disponibile",
      "errors.invalid-url": "URL non valido.",
      "errors.failed-to-fetch":
        "Ops, qualcosa è andato storto durante il recupero dei dettagli del post.",
    },
  },
  de: {
    translation: {
      "reactions.reply": "Antworten",
      "reactions.read": "Mehr lesen auf Bluesky",
      "reactions.read_zero": "Mehr lesen auf Bluesky",
      "reactions.read_one": "{{count}} Antwort auf Bluesky lesen",
      "reactions.read_other": "{{count}} Antworten auf Bluesky lesen",
      "footer.view-on-bluesky-450": "Auf Bluesky ansehen",
      "footer.view-on-bluesky-400": "Bluesky",
      "errors.not-available": "Dieser Beitrag ist nicht verfügbar",
      "errors.invalid-url": "Ungültige URL.",
      "errors.failed-to-fetch":
        "Ups, beim Abrufen der Beitragsdetails ist ein Fehler aufgetreten.",
    },
  },
  fr: {
    translation: {
      "reactions.reply": "Répondre",
      "reactions.read": "En savoir plus sur Bluesky",
      "reactions.read_zero": "En savoir plus sur Bluesky",
      "reactions.read_one": "Lire {{count}} réponse sur Bluesky",
      "reactions.read_other": "Lire {{count}} réponses sur Bluesky",
      "footer.view-on-bluesky-450": "Voir sur Bluesky",
      "footer.view-on-bluesky-400": "Bluesky",
      "errors.not-available": "Ce post n'est pas disponible",
      "errors.invalid-url": "URL invalide.",
      "errors.failed-to-fetch":
        "Oups, une erreur est survenue lors de la récupération des détails du post.",
    },
  },
};

/**
 * TODO: !! Need to sort this out.
 * It doesn't work with multilanguage embeded posts in the same page.
 * @param lng
 * @returns
 */
export default async function (lng: LocaleKey) {
  await i18n.init({
    resources,
    lng,

    interpolation: {
      escapeValue: false,
    },
  });

  return i18n.t;
}
