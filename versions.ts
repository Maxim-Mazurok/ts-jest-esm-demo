import allNodeVersions from "all-node-versions";

export const getAllNodeVersion = async () => (await allNodeVersions()).versions;
