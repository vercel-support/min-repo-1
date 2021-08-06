import { mutationField, nonNull } from 'nexus'

export const OperatingHoursUpsertOneMutation = mutationField(
  'upsertOneOperatingHours',
  {
    type: nonNull('OperatingHours'),
    args: {
      where: nonNull('OperatingHoursWhereUniqueInput'),
      create: nonNull('OperatingHoursCreateInput'),
      update: nonNull('OperatingHoursUpdateInput'),
    },
    resolve(_parent, args, { prisma, select }) {
      return prisma.operatingHours.upsert({
        ...args,
        ...select,
      })
    },
  },
)
