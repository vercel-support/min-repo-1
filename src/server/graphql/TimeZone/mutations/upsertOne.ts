import { mutationField, nonNull } from 'nexus'

export const TimeZoneUpsertOneMutation = mutationField('upsertOneTimeZone', {
  type: nonNull('TimeZone'),
  args: {
    where: nonNull('TimeZoneWhereUniqueInput'),
    create: nonNull('TimeZoneCreateInput'),
    update: nonNull('TimeZoneUpdateInput'),
  },
  resolve(_parent, args, { prisma, select }) {
    return prisma.timeZone.upsert({
      ...args,
      ...select,
    })
  },
})
