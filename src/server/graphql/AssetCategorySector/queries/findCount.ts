import { queryField, nonNull, list } from 'nexus'

export const AssetCategorySectorFindCountQuery = queryField(
  'findManyAssetCategorySectorCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'AssetCategorySectorWhereInput',
      orderBy: list('AssetCategorySectorOrderByInput'),
      cursor: 'AssetCategorySectorWhereUniqueInput',
      distinct: 'AssetCategorySectorScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetCategorySector.count(args as any)
    },
  },
)
