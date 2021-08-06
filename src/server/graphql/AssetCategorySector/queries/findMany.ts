import { queryField, nonNull, list } from 'nexus'

export const AssetCategorySectorFindManyQuery = queryField(
  'findManyAssetCategorySector',
  {
    type: nonNull(list(nonNull('AssetCategorySector'))),
    args: {
      where: 'AssetCategorySectorWhereInput',
      orderBy: list('AssetCategorySectorOrderByInput'),
      cursor: 'AssetCategorySectorWhereUniqueInput',
      distinct: 'AssetCategorySectorScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetCategorySector.findMany({
        ...args,
        ...select,
      })
    },
  },
)
