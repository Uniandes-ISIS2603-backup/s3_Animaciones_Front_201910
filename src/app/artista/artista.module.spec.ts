import { ArtistaModule } from './artista.module';

describe('ArtistaModule', () => {
  let artistaModule: ArtistaModule;

  beforeEach(() => {
    artistaModule = new ArtistaModule();
  });

  it('should create an instance', () => {
    expect(artistaModule).toBeTruthy();
  });
});
