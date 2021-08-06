import { queryField, list } from 'nexus'

export const AssetsAndLiabilitiesRecordTypeAggregateQuery = queryField(
  'aggregateAssetsAndLiabilitiesRecordType',
  {
    type: 'AggregateAssetsAndLiabilitiesRecordType',
    args: {
      where: 'AssetsAndLiabilitiesRecordTypeWhereInput',
      orderBy: list('AssetsAndLiabilitiesRecordTypeOrderByInput'),
      cursor: 'AssetsAndLiabilitiesRecordTypeWhereUniqueInput',
      distinct: 'AssetsAndLiabilitiesRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.assetsAndLiabilitiesRecordType.aggregate({
        ...args,
        ...select,
      }) as any
    },
  },
)
