import Controller from '@ember/controller';

export default Controller.extend({
  actions:
    {
      save(note) {
        note.set("info","Contenu sauvegardé");
      },
      clear(note)
      {
        note.set("content","");
        note.set("info","Contenu effacé");
      }
    }
});
