import { queryField, nonNull, list } from 'nexus'

export const AssetCategoryFindManyQuery = queryField('findManyAssetCategory', {
  type: nonNull(list(nonNull('AssetCategory'))),
  args: {
    where: 'AssetCategoryWhereInput',
    orderBy: list('AssetCategoryOrderByInput'),
    cursor: 'AssetCategoryWhereUniqueInput',
    distinct: 'AssetCategoryScalarFieldEnum',
    skip: 'Int',
    take: 'Int',
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.assetCategory.findMany({
      ...args,
      ...select,
    })
  },
})
