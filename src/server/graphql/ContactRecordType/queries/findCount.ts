import { queryField, nonNull, list } from 'nexus'

export const ContactRecordTypeFindCountQuery = queryField(
  'findManyContactRecordTypeCount',
  {
    type: nonNull('Int'),
    args: {
      where: 'ContactRecordTypeWhereInput',
      orderBy: list('ContactRecordTypeOrderByInput'),
      cursor: 'ContactRecordTypeWhereUniqueInput',
      distinct: 'ContactRecordTypeScalarFieldEnum',
      skip: 'Int',
      take: 'Int',
    },
    resolve(_parent, args, { prisma }) {
      return prisma.contactRecordType.count(args as any)
    },
  },
)
