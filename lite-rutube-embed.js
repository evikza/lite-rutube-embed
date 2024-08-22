class LiteRutubeEmbed extends HTMLElement {
  constructor() {
    super();
  }

  get videoId() {
    return this.getAttribute('videoid');
  }

  get videoMetadata() {
    return {
      skinColor: this.getAttribute('skin') || null,
      t: this.getAttribute('start') || null,
      stopTime: this.getAttribute('end') || null,
    };
  }

  get isAutoplay() {
    return this.hasAttribute('autoplay');
  }

  connectedCallback() {
    this.invokeDOM();

    this.addEventListener('click', () => this.loadIframe());
  }

  invokeDOM() {
    const shadow = this.attachShadow({ mode: 'open' });

    shadow.innerHTML = `
			<style>
				:host {
					contain: content;
					display: block;
					background: #eeeeee;
					position: relative;
					width: 100%;
					padding-bottom: calc(100% / (16 / 9));
				}

				.prependerFrame {
					cursor: pointer;
				}

				.prependerFrame, .thumbnailImage, iframe {
					position: absolute;
					width: 100%;
					height: 100%;
					left: 0;
				}

				.thumbnailImage {
					object-fit: cover;
				}
						
				.playVideoButton {
					background: #00a4e1;
					height: 48px;
					width: 48px;
				}

				.playVideoButton, .playVideoButton:before {
					position: absolute;
					top: 50%;
					left: 50%;
					transform: translate3d(-50%, -50%, 0);
					cursor: inherit;
				}
							
				.playVideoButton {
					z-index: 1;
					border: 0;
					border-radius: 8px;
				}

				.buttonPlayImage {
					display: flex;
					justify-content: center;
				}

				.buttonPlayImage svg {
					height: 24px;
					width: 24px;
				}
							
				.prependerFrame.available > .playVideoButton {
					display: none;
				}
			</style>
			<div class="prependerFrame">
    		<picture>
					<source id="typeSourceImage" type="image/jpeg">
					<img src="https://rutube.ru/api/video/${this.videoId}/thumbnail/?redirect=1" class="thumbnailImage" loading="lazy">
				</picture>
				<button class="playVideoButton" type="button">
					<div class="buttonPlayImage">
						<svg data-testid="play-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M8 5v14l10-7L8 5Z" fill="white" stroke="white" stroke-width="1.24" stroke-linecap="round" stroke-linejoin="round"></path></svg>
					</div>
				</button>
			</div>
   	`;

    this.ref = shadow.querySelector('.prependerFrame');
  }

  loadIframe() {
    const iframeTag = `<iframe width="720" height="405" src="https://rutube.ru/play/embed/${
      this.videoId
    }/?${this.uriParameters()}" frameBorder="0" allow="clipboard-write; autoplay" webkitAllowFullScreen mozallowfullscreen allowFullScreen></iframe>`;

    this.ref.insertAdjacentHTML('beforeend', iframeTag);
    this.ref.classList.add('available');

    if (this.isAutoplay) {
      setTimeout(() => {
        this.shadowRoot.querySelector('iframe').contentWindow.postMessage(
          JSON.stringify({
            type: 'player:play',
            data: {},
          }),
          '*'
        );
      }, 1500);
    }
  }

  uriParameters() {
    const parameters = Object.fromEntries(
      Object.entries(this.videoMetadata).filter(([key, value]) => !!value)
    );

    return new URLSearchParams(parameters).toString();
  }
}

customElements.define('lite-rutube', LiteRutubeEmbed);
