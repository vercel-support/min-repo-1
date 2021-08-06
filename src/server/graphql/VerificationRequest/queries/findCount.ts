import { queryField, nonNull, list } from 'nexus'

export const VerificationRequestFindCountQuery = queryField(
  'findManyVerificationRequestCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'VerificationRequestWhereInput',
      orderBy: list('VerificationRequestOrderByInput'),
      cursor: 'VerificationRequestWhereUniqueInput',
      distinct: 'VerificationRequestScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.verificationRequest.count(args as any)
    },
  },
)
