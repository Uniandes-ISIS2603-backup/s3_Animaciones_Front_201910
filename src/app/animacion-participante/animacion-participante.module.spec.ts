import { AnimacionParticipanteModule } from './animacion-participante.module';

describe('AnimacionParticipanteModule', () => {
  let animacionParticipanteModule: AnimacionParticipanteModule;

  beforeEach(() => {
    animacionParticipanteModule = new AnimacionParticipanteModule();
  });

  it('should create an instance', () => {
    expect(animacionParticipanteModule).toBeTruthy();
  });
});
