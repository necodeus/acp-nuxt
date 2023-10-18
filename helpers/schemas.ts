export const slugToTable = (string: string) => {
    const replaced = string.replace(/-/g, '_');

    return `${string.charAt(0)}${replaced.substring(replaced.indexOf('_'))}`;
}
