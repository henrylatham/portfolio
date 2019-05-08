const getContactHref = (name, contact) => {
  let href;

  switch (name) {
    case 'book':
      href = '/book'; // https://mailchi.mp/481d8ad40b87/howtobuildgreatproducts
      break;
    case 'twitter':
      href = `https://www.twitter.com/${contact}`;
      break;
    case 'medium':
      href = `https://www.medium.com/${contact}`;
      break;
    case 'github':
      href = `https://github.com/${contact}`;
      break;
    case 'vkontakte':
      href = `https://vk.com/${contact}`;
      break;
    case 'telegram':
      href = `telegram:${contact}`;
      break;
    case 'email':
      href = `mailto:${contact}`;
      break;
    default:
      href = contact;
      break;
  }

  return href;
};

export default getContactHref;
