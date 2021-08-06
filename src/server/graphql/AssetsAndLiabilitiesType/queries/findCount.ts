import { queryField, nonNull, list } from 'nexus'

export const AssetsAndLiabilitiesTypeFindCountQuery = queryField(
  'findManyAssetsAndLiabilitiesTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'AssetsAndLiabilitiesTypeWhereInput',
      orderBy: list('AssetsAndLiabilitiesTypeOrderByInput'),
      cursor: 'AssetsAndLiabilitiesTypeWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.assetsAndLiabilitiesType.count(args as any)
    },
  },
)
