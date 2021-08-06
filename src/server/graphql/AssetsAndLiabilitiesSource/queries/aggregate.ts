import { queryField, list } from 'nexus'

export const AssetsAndLiabilitiesSourceAggregateQuery = queryField(
  'aggregateAssetsAndLiabilitiesSource',
  {
    type: 'AggregateAssetsAndLiabilitiesSource',
    args: {
      where: 'AssetsAndLiabilitiesSourceWhereInput',
      orderBy: list('AssetsAndLiabilitiesSourceOrderByInput'),
      cursor: 'AssetsAndLiabilitiesSourceWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesSourceScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilitiesSource.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
