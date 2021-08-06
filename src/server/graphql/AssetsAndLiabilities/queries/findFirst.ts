import { queryField, list } from 'nexus'

export const AssetsAndLiabilitiesFindFirstQuery = queryField(
  'findFirstAssetsAndLiabilities',
  {
    type: 'AssetsAndLiabilities',
    args: {
      where: 'AssetsAndLiabilitiesWhereInput',
      orderBy: list('AssetsAndLiabilitiesOrderByInput'),
      cursor: 'AssetsAndLiabilitiesWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilities.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
