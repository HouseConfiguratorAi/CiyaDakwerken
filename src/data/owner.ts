// The person behind Ciya Dakwerken. Name + role are verified via the KBO register (bestuurder of
// Ciya Ismet BV). Drop the portrait in src/assets/images/ and import it here — every owner slot on the
// site appears automatically; without a photo the slots stay hidden.
import ownerPhoto from '../assets/images/ciya-ismet-zaakvoerder.jpg';
import ownerPortrait from '../assets/images/ciya-ismet-portret.jpg';

export const owner = {
	name: 'Ciya Ismet',
	role: 'Zaakvoerder en dakwerker',
	experience: 'Meer dan 20 jaar ervaring in dakwerken',
	photo: ownerPhoto as ImageMetadata | null,
	/** Tight head-and-shoulders crop for small avatars. */
	portrait: ownerPortrait as ImageMetadata | null,
	photoAlt: 'Ciya Ismet, zaakvoerder van Ciya Dakwerken, met brander op een plat dak',
};
