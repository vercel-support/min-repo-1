import { mutationField, nonNull } from 'nexus'

export const AccountRecordTypeUpsertOneMutation = mutationField(
  'upsertOneAccountRecordType',
  {
    type: nonNull('AccountRecordType'),
    args: {
      where: nonNull('AccountRecordTypeWhereUniqueInput'),
      create: nonNull('AccountRecordTypeCreateInput'),
      update: nonNull('AccountRecordTypeUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.accountRecordType.upsert({
        ...args,
        ...select,
      })
    },
  },
)
