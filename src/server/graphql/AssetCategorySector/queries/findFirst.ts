import { queryField, list } from 'nexus'

export const AssetCategorySectorFindFirstQuery = queryField(
  'findFirstAssetCategorySector',
  {
    type: 'AssetCategorySector',
    args: {
      where: 'AssetCategorySectorWhereInput',
      orderBy: list('AssetCategorySectorOrderByInput'),
      cursor: 'AssetCategorySectorWhereUniqueInput',
      distinct: 'AssetCategorySectorScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetCategorySector.findFirst({
        ...args,
        ...select,
      })
    },
  },
)
