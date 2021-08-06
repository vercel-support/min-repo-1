import { queryField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesSourceFindUniqueQuery = queryField(
  'findUniqueAssetsAndLiabilitiesSource',
  {
    type: 'AssetsAndLiabilitiesSource',
    args: {
      where: nonNull('AssetsAndLiabilitiesSourceWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.assetsAndLiabilitiesSource.findUnique({
        where,
        ...select,
      })
    },
  },
)
