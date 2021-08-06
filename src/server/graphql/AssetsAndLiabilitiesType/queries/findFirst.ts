import { queryField, list } from 'nexus'

export const AssetsAndLiabilitiesTypeFindFirstQuery = queryField(
  'findFirstAssetsAndLiabilitiesType',
  {
    type: 'AssetsAndLiabilitiesType',
    args: {
      where: 'AssetsAndLiabilitiesTypeWhereInput',
      orderBy: list('AssetsAndLiabilitiesTypeOrderByInput'),
      cursor: 'AssetsAndLiabilitiesTypeWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilitiesType.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
