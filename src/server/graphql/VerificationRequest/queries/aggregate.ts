import { queryField, list } from 'nexus'

export const VerificationRequestAggregateQuery = queryField(
  'aggregateVerificationRequest',
  {
    type: 'AggregateVerificationRequest',
    args: {
      where: 'VerificationRequestWhereInput',
      orderBy: list('VerificationRequestOrderByInput'),
      cursor: 'VerificationRequestWhereUniqueInput',
      distinct: 'VerificationRequestScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.verificationRequest.aggregate({ ...args, ...select }) as any
    },
  },
)
