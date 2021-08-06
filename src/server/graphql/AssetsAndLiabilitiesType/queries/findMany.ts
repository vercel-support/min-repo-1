import { queryField, nonNull, list } from 'nexus'

export const AssetsAndLiabilitiesTypeFindManyQuery = queryField(
  'findManyAssetsAndLiabilitiesType',
  {
    type: nonNull(list(nonNull('AssetsAndLiabilitiesType'))),
    args: {
      where: 'AssetsAndLiabilitiesTypeWhereInput',
      orderBy: list('AssetsAndLiabilitiesTypeOrderByInput'),
      cursor: 'AssetsAndLiabilitiesTypeWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilitiesType.findMany({
        ...args,
        ...select,
      })
    },
  },
)
