import { queryField, nonNull, list } from 'nexus'

export const AssetCategoryFindCountQuery = queryField(
  'findManyAssetCategoryCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'AssetCategoryWhereInput',
      orderBy: list('AssetCategoryOrderByInput'),
      cursor: 'AssetCategoryWhereUniqueInput',
      distinct: 'AssetCategoryScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetCategory.count(args as any)
    },
  },
)
