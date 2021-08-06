import { queryField, nonNull } from 'nexus'

export const AssetsAndLiabilitiesFindUniqueQuery = queryField(
  'findUniqueAssetsAndLiabilities',
  {
    type: 'AssetsAndLiabilities',
    args: {
      where: nonNull('AssetsAndLiabilitiesWhereUniqueInput'),
    },
    resolve(_parent, { where }, { prisma, select }) {
      return prisma.assetsAndLiabilities.findUnique({
        where,
        ...select,
      })
    },
  },
)
