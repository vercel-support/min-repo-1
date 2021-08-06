import { queryField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesTypeFindUniqueQuery = queryField(
  'findUniqueAssetsAndLiabilitiesType',
  {
    type: 'AssetsAndLiabilitiesType',
    args: {
      where: nonNull('AssetsAndLiabilitiesTypeWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.assetsAndLiabilitiesType.findUnique({
        where,
        ...select,
      })
    },
  },
)
