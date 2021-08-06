import { mutationField, nonNull } from 'nexus'

export const ContactRecordTypeUpsertOneMutation = mutationField(
  'upsertOneContactRecordType',
  {
    type: nonNull('ContactRecordType'),
    args: {
      where: nonNull('ContactRecordTypeWhereUniqueInput'),
      create: nonNull('ContactRecordTypeCreateInput'),
      update: nonNull('ContactRecordTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.contactRecordType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
